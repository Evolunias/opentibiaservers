import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-germany');
}

export default function PvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-germany" />;
}
