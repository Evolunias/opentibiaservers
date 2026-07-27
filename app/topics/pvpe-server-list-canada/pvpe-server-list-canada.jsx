import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-canada');
}

export default function PvpeServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-canada" />;
}
