import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-tibia-private-server');
}

export default function Tibia14SeasonalTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-tibia-private-server" />;
}
