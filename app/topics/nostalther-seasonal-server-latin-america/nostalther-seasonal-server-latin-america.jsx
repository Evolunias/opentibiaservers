import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-latin-america');
}

export default function NostaltherSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-latin-america" />;
}
