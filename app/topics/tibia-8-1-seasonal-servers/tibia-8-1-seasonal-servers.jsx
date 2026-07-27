import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-servers');
}

export default function Tibia81SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-servers" />;
}
