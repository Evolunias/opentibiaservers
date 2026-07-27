import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-argentina');
}

export default function TibiascapeSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-argentina" />;
}
