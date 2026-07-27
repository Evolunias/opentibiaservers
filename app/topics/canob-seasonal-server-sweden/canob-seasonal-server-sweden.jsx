import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-seasonal-server-sweden');
}

export default function CanobSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-seasonal-server-sweden" />;
}
