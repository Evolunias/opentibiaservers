import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-uk');
}

export default function CanobSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-uk" />;
}
