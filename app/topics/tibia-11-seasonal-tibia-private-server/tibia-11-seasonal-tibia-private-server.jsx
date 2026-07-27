import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-tibia-private-server');
}

export default function Tibia11SeasonalTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-tibia-private-server" />;
}
