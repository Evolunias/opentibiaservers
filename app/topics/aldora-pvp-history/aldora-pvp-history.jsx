import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-pvp-history');
}

export default function AldoraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="aldora-pvp-history" />;
}
