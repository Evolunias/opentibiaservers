import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-latin-america');
}

export default function ThorniaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-latin-america" />;
}
