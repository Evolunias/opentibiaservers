import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-latin-america');
}

export default function AlasteraSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-latin-america" />;
}
