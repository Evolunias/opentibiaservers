import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-sweden');
}

export default function PvpEnforcedOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-sweden" />;
}
