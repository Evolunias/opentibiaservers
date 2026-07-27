import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-uk');
}

export default function PvpeServerListUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-uk" />;
}
