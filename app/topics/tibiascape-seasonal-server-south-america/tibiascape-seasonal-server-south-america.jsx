import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-south-america');
}

export default function TibiascapeSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-south-america" />;
}
