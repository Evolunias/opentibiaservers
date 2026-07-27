import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-poland');
}

export default function KasteriaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-poland" />;
}
