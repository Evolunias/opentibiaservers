import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-seasonal-server');
}

export default function Canob11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-seasonal-server" />;
}
