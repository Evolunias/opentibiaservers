import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-seasonal-servers');
}

export default function Tibia86SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-seasonal-servers" />;
}
