import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-pvp-history');
}

export default function HarmoniaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="harmonia-pvp-history" />;
}
