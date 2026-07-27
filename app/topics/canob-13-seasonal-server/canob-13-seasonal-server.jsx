import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-seasonal-server');
}

export default function Canob13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-seasonal-server" />;
}
