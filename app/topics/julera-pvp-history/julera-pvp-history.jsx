import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-pvp-history');
}

export default function JuleraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="julera-pvp-history" />;
}
