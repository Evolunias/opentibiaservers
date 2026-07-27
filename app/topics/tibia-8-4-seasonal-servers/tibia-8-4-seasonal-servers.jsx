import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-servers');
}

export default function Tibia84SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-servers" />;
}
