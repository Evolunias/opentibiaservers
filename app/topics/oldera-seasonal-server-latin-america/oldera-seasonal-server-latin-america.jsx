import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-latin-america');
}

export default function OlderaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-latin-america" />;
}
