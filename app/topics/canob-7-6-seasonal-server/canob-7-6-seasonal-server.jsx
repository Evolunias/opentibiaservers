import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-seasonal-server');
}

export default function Canob76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-seasonal-server" />;
}
