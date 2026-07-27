import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-north-america');
}

export default function SerenitySeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-north-america" />;
}
