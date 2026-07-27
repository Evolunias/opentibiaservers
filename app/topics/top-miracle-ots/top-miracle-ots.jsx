import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-ots');
}

export default function TopMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-ots" />;
}
