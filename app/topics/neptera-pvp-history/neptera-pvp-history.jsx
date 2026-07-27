import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-pvp-history');
}

export default function NepteraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="neptera-pvp-history" />;
}
