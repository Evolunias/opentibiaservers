import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-germany');
}

export default function TibijkaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-germany" />;
}
