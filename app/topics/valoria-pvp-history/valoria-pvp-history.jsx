import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-pvp-history');
}

export default function ValoriaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="valoria-pvp-history" />;
}
