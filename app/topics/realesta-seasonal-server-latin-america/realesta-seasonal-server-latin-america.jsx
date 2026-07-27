import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-latin-america');
}

export default function RealestaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-latin-america" />;
}
