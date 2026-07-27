import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-europe');
}

export default function PvpeServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-europe" />;
}
