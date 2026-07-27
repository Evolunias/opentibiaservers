import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-latin-america');
}

export default function TibianusSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-latin-america" />;
}
