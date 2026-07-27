import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-brazil');
}

export default function PvpeServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-brazil" />;
}
