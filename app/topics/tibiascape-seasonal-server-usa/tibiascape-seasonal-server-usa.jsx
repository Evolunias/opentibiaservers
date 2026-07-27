import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-usa');
}

export default function TibiascapeSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-usa" />;
}
