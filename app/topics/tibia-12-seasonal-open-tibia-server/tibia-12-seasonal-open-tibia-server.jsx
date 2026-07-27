import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-seasonal-open-tibia-server');
}

export default function Tibia12SeasonalOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-seasonal-open-tibia-server" />;
}
