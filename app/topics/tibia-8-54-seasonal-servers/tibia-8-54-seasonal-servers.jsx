import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-servers');
}

export default function Tibia854SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-servers" />;
}
