import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-poland');
}

export default function PvpeServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-poland" />;
}
