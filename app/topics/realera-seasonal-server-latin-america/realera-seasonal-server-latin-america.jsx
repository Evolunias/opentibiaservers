import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-latin-america');
}

export default function RealeraSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-latin-america" />;
}
