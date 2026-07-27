import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-europe');
}

export default function SerenitySeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-europe" />;
}
