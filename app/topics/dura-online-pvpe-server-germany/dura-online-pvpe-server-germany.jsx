import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-germany');
}

export default function DuraOnlinePvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-germany" />;
}
