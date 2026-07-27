import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-mexico');
}

export default function KasteriaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-mexico" />;
}
