import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-season');
}

export default function TibiaraSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibiara-season" />;
}
