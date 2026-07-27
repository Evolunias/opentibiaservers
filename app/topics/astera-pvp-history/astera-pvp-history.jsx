import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-pvp-history');
}

export default function AsteraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="astera-pvp-history" />;
}
