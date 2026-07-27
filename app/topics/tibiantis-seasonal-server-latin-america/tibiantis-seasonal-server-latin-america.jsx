import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-latin-america');
}

export default function TibiantisSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-latin-america" />;
}
