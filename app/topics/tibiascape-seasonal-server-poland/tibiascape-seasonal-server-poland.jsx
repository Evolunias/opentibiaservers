import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-poland');
}

export default function TibiascapeSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-poland" />;
}
