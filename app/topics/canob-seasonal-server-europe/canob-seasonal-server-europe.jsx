import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-europe');
}

export default function CanobSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-europe" />;
}
