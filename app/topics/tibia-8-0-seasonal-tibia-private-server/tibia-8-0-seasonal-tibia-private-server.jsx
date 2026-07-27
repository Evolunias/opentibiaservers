import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-tibia-private-server');
}

export default function Tibia80SeasonalTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-tibia-private-server" />;
}
