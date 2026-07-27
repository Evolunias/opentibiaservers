import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-mexico');
}

export default function MidhemSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-mexico" />;
}
