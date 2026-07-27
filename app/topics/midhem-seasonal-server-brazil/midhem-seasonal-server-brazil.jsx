import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-brazil');
}

export default function MidhemSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-brazil" />;
}
