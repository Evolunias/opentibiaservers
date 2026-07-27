import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-latin-america');
}

export default function CanobSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-latin-america" />;
}
