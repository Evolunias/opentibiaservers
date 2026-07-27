import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-uk');
}

export default function SerenityPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-uk" />;
}
