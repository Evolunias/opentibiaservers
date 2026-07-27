import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-canada');
}

export default function MidhemSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-canada" />;
}
