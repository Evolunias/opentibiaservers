import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-tibia-private-server');
}

export default function Tibia84SeasonalTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-tibia-private-server" />;
}
