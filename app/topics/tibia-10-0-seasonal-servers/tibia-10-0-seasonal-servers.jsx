import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-servers');
}

export default function Tibia100SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-servers" />;
}
