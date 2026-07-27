import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-server');
}

export default function Tibia15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-server" />;
}
