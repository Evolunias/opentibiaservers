import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-pvp-history');
}

export default function CelestaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="celesta-pvp-history" />;
}
