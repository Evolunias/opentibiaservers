import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-open-tibia-server');
}

export default function Tibia15SeasonalOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-open-tibia-server" />;
}
