import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-pvp-history');
}

export default function ObsidiaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="obsidia-pvp-history" />;
}
