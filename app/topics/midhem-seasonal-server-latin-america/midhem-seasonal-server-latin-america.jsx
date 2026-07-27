import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-latin-america');
}

export default function MidhemSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-latin-america" />;
}
