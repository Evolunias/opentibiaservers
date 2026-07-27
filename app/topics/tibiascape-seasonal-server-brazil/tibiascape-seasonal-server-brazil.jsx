import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-brazil');
}

export default function TibiascapeSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-brazil" />;
}
