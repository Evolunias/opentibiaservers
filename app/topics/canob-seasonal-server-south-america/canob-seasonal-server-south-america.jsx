import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-south-america');
}

export default function CanobSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-south-america" />;
}
