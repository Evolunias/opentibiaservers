import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-germany');
}

export default function ThorniaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-germany" />;
}
