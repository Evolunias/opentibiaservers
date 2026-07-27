import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-servers');
}

export default function Tibia71SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-servers" />;
}
