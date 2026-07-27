import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-pvp-enforced-server');
}

export default function Venoreot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-pvp-enforced-server" />;
}
