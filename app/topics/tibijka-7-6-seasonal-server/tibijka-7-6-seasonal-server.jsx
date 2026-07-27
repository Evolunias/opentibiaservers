import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-seasonal-server');
}

export default function Tibijka76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-seasonal-server" />;
}
