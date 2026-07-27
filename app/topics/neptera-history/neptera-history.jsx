import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-history');
}

export default function NepteraHistoryKeywordPage() {
  return <StaticKeywordPage slug="neptera-history" />;
}
