import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-pvp-history');
}

export default function VineraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="vinera-pvp-history" />;
}
