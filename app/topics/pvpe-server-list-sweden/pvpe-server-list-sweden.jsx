import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-sweden');
}

export default function PvpeServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-sweden" />;
}
