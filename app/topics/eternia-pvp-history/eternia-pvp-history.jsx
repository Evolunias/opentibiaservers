import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-pvp-history');
}

export default function EterniaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="eternia-pvp-history" />;
}
