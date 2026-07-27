import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-germany');
}

export default function UnlinePvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-germany" />;
}
