import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-sweden');
}

export default function PvpServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-sweden" />;
}
