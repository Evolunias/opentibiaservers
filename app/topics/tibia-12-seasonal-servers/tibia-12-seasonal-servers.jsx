import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-seasonal-servers');
}

export default function Tibia12SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-seasonal-servers" />;
}
