import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-mexico');
}

export default function CanobSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-mexico" />;
}
