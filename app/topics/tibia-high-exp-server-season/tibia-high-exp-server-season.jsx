import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-season');
}

export default function TibiaHighExpServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-season" />;
}
