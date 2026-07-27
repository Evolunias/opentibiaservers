import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-seasonal-server');
}

export default function Tibijka15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-seasonal-server" />;
}
