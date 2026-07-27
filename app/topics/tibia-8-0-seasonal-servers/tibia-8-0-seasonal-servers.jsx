import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-servers');
}

export default function Tibia80SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-servers" />;
}
