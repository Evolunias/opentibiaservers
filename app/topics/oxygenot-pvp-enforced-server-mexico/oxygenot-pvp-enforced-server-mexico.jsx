import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-mexico');
}

export default function OxygenotPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-mexico" />;
}
