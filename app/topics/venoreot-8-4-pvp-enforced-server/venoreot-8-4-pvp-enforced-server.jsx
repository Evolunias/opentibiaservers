import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-pvp-enforced-server');
}

export default function Venoreot84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-pvp-enforced-server" />;
}
