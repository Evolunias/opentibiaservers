import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-germany');
}

export default function TibiascapeSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-germany" />;
}
