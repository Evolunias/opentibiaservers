import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-uk');
}

export default function KasteriaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-uk" />;
}
