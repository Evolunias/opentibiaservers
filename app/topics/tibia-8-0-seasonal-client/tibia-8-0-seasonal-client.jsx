import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-client');
}

export default function Tibia80SeasonalClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-client" />;
}
