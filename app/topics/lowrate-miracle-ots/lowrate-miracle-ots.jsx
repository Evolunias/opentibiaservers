import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-ots');
}

export default function LowrateMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-ots" />;
}
