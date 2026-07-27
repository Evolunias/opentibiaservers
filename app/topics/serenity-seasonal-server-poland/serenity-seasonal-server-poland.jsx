import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-poland');
}

export default function SerenitySeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-poland" />;
}
