import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-pvp-history');
}

export default function PaceraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="pacera-pvp-history" />;
}
