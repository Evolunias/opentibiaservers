import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-ots');
}

export default function NoResetMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-ots" />;
}
