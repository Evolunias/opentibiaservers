import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-mexico');
}

export default function SerenitySeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-mexico" />;
}
