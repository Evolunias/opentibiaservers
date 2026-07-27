import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-latin-america');
}

export default function TibiascapeSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-latin-america" />;
}
