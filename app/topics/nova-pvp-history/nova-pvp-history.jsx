import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-pvp-history');
}

export default function NovaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="nova-pvp-history" />;
}
