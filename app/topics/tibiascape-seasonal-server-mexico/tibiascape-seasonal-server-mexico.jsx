import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-mexico');
}

export default function TibiascapeSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-mexico" />;
}
