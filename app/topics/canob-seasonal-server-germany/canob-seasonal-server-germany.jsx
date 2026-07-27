import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-germany');
}

export default function CanobSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-germany" />;
}
