import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-seasonal-server');
}

export default function Tibijka80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-seasonal-server" />;
}
