import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-pvp-history');
}

export default function TrimeraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="trimera-pvp-history" />;
}
