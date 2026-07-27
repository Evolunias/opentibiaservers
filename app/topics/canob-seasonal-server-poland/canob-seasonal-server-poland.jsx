import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-poland');
}

export default function CanobSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-poland" />;
}
