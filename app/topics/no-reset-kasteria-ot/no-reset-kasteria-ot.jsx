import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-ot');
}

export default function NoResetKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-ot" />;
}
