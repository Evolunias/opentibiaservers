import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-germany');
}

export default function SerenitySeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-germany" />;
}
