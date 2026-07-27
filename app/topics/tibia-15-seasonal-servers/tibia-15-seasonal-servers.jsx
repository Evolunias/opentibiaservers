import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-servers');
}

export default function Tibia15SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-servers" />;
}
