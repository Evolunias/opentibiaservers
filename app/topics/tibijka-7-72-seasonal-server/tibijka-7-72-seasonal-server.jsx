import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-seasonal-server');
}

export default function Tibijka772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-seasonal-server" />;
}
