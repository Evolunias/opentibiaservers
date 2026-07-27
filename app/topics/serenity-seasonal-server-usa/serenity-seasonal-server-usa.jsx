import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-usa');
}

export default function SerenitySeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-usa" />;
}
