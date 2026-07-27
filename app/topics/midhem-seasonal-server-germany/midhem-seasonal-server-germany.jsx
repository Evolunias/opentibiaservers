import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-germany');
}

export default function MidhemSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-germany" />;
}
