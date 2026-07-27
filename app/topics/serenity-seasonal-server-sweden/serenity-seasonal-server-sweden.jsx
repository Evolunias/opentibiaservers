import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-sweden');
}

export default function SerenitySeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-sweden" />;
}
