import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-latin-america');
}

export default function LumineraSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-latin-america" />;
}
