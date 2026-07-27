import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-sweden');
}

export default function PvpClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-sweden" />;
}
