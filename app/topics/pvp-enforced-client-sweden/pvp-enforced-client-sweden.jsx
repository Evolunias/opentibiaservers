import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-sweden');
}

export default function PvpEnforcedClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-sweden" />;
}
