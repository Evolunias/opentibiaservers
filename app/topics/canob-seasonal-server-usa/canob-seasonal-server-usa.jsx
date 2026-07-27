import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-usa');
}

export default function CanobSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-usa" />;
}
