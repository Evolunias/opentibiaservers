import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-latin-america');
}

export default function NepreniaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-latin-america" />;
}
