import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-seasonal-server');
}

export default function Tibijka11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-seasonal-server" />;
}
