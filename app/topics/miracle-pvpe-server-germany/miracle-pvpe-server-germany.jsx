import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-germany');
}

export default function MiraclePvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-germany" />;
}
