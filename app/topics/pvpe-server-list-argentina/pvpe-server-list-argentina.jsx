import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-argentina');
}

export default function PvpeServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-argentina" />;
}
