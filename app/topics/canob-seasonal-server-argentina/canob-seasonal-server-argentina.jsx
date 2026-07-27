import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-argentina');
}

export default function CanobSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-argentina" />;
}
