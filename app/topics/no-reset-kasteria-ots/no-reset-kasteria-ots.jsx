import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-ots');
}

export default function NoResetKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-ots" />;
}
