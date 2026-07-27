import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-pvp-enforced-server');
}

export default function Venoreot100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-pvp-enforced-server" />;
}
