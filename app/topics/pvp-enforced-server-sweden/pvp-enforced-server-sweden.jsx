import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-sweden');
}

export default function PvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-sweden" />;
}
