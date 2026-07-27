import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-uk');
}

export default function SerenityNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-uk" />;
}
