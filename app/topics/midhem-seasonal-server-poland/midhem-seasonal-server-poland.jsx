import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-poland');
}

export default function MidhemSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-poland" />;
}
