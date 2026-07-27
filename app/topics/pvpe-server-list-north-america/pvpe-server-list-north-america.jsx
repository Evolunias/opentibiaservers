import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-north-america');
}

export default function PvpeServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-north-america" />;
}
