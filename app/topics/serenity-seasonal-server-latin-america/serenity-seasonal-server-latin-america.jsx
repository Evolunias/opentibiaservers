import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-latin-america');
}

export default function SerenitySeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-latin-america" />;
}
