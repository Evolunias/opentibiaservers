import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-seasonal-server');
}

export default function Tibijka13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-seasonal-server" />;
}
