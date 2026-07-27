import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-brazil');
}

export default function SerenitySeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-brazil" />;
}
