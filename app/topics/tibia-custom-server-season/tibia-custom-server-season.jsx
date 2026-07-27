import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-season');
}

export default function TibiaCustomServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-season" />;
}
