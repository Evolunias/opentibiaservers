import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-tibia-private-server');
}

export default function Tibia13SeasonalTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-tibia-private-server" />;
}
