import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-ots');
}

export default function CurrentMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-ots" />;
}
