import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-pvp-history');
}

export default function TenebraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="tenebra-pvp-history" />;
}
