import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-tibia-private-server');
}

export default function Tibia15SeasonalTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-tibia-private-server" />;
}
