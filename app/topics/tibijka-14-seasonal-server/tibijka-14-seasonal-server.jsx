import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-seasonal-server');
}

export default function Tibijka14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-seasonal-server" />;
}
