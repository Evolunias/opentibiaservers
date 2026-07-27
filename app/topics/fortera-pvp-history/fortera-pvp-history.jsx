import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-pvp-history');
}

export default function ForteraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="fortera-pvp-history" />;
}
