import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-uk');
}

export default function SerenitySeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-uk" />;
}
