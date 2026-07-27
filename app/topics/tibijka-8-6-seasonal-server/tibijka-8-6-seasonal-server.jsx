import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-seasonal-server');
}

export default function Tibijka86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-seasonal-server" />;
}
