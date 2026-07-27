import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-uk');
}

export default function OxygenotPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-uk" />;
}
