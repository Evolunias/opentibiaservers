import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-germany');
}

export default function PvpeServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-germany" />;
}
