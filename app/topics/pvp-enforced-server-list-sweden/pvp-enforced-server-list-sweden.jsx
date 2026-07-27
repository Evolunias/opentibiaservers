import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-list-sweden');
}

export default function PvpEnforcedServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-list-sweden" />;
}
