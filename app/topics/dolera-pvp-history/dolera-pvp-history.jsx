import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-pvp-history');
}

export default function DoleraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="dolera-pvp-history" />;
}
