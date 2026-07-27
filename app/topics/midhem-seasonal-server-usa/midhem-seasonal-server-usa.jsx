import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-usa');
}

export default function MidhemSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-usa" />;
}
