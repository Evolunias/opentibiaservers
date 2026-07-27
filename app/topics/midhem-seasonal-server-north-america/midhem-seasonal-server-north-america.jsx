import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-north-america');
}

export default function MidhemSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-north-america" />;
}
