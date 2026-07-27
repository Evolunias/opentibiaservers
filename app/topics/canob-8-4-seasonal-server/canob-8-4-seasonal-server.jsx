import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-seasonal-server');
}

export default function Canob84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-seasonal-server" />;
}
