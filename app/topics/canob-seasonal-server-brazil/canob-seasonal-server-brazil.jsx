import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-brazil');
}

export default function CanobSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-brazil" />;
}
