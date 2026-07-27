import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-open-tibia-server');
}

export default function Tibia854SeasonalOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-open-tibia-server" />;
}
