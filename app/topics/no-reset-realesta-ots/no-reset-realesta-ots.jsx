import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-ots');
}

export default function NoResetRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-ots" />;
}
