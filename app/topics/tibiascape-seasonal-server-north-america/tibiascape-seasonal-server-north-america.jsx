import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-north-america');
}

export default function TibiascapeSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-north-america" />;
}
