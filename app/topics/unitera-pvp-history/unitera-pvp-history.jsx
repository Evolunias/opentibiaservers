import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-pvp-history');
}

export default function UniteraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="unitera-pvp-history" />;
}
