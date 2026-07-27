import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-uk');
}

export default function SerenityPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-uk" />;
}
