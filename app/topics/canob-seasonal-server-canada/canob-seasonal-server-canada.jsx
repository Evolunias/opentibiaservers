import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-canada');
}

export default function CanobSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-canada" />;
}
