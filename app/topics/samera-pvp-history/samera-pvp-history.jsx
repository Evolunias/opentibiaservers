import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-pvp-history');
}

export default function SameraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="samera-pvp-history" />;
}
