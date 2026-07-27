import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-argentina');
}

export default function OxygenotPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-argentina" />;
}
