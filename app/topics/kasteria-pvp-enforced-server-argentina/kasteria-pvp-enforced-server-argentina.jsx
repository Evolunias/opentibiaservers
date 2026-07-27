import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-argentina');
}

export default function KasteriaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-argentina" />;
}
