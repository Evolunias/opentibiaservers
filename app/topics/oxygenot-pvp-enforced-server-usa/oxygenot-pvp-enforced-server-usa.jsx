import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-usa');
}

export default function OxygenotPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-usa" />;
}
