import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-pvp-history');
}

export default function MorganaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="morgana-pvp-history" />;
}
