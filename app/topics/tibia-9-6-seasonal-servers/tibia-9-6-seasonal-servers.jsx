import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-servers');
}

export default function Tibia96SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-servers" />;
}
