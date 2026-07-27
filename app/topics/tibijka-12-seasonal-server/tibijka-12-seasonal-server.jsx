import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-seasonal-server');
}

export default function Tibijka12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-seasonal-server" />;
}
