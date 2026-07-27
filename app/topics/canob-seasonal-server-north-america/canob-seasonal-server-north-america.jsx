import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-north-america');
}

export default function CanobSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-north-america" />;
}
