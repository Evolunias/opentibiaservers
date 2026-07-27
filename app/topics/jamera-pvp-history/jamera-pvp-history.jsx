import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-pvp-history');
}

export default function JameraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="jamera-pvp-history" />;
}
