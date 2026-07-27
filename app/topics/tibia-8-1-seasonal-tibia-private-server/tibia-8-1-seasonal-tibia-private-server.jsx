import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-tibia-private-server');
}

export default function Tibia81SeasonalTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-tibia-private-server" />;
}
