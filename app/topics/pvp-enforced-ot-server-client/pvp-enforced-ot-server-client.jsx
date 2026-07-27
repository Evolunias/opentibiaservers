import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-client');
}

export default function PvpEnforcedOtServerClientKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-client" />;
}
