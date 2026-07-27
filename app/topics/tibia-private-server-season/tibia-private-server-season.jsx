import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-season');
}

export default function TibiaPrivateServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-season" />;
}
