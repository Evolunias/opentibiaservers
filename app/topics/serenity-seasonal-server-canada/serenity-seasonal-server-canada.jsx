import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-canada');
}

export default function SerenitySeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-canada" />;
}
