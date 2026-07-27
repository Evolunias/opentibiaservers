import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-pvp-history');
}

export default function NeranaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="nerana-pvp-history" />;
}
