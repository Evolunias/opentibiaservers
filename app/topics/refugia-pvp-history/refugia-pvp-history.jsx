import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-pvp-history');
}

export default function RefugiaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="refugia-pvp-history" />;
}
