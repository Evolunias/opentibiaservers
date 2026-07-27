import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-sweden');
}

export default function NonPvpServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-sweden" />;
}
