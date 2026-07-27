import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-servers');
}

export default function Tibia11SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-servers" />;
}
