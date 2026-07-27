import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-uk');
}

export default function ImperianicPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-uk" />;
}
