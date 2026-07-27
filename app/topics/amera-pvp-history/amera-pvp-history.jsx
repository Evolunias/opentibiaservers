import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-pvp-history');
}

export default function AmeraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="amera-pvp-history" />;
}
