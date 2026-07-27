import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-uk');
}

export default function MidhemSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-uk" />;
}
