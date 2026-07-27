import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-usa');
}

export default function TibijkaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-usa" />;
}
