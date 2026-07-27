import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-europe');
}

export default function MidhemSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-europe" />;
}
