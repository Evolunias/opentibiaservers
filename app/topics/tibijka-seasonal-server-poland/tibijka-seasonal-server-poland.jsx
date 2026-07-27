import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-poland');
}

export default function TibijkaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-poland" />;
}
