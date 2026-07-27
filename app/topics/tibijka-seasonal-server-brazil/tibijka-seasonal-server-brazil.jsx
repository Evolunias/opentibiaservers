import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-brazil');
}

export default function TibijkaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-brazil" />;
}
