import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-france');
}

export default function SerenitySeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-france" />;
}
