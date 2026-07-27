import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-sweden');
}

export default function NonPvpClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-sweden" />;
}
