import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-latin-america');
}

export default function ClassicusSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-latin-america" />;
}
