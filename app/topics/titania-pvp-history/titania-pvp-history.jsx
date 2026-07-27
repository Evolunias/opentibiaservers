import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-pvp-history');
}

export default function TitaniaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="titania-pvp-history" />;
}
