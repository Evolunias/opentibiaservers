import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-argentina');
}

export default function TibijkaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-argentina" />;
}
