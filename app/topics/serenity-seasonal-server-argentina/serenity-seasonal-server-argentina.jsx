import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-argentina');
}

export default function SerenitySeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-argentina" />;
}
