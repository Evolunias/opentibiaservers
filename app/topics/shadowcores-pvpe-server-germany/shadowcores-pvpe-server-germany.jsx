import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-germany');
}

export default function ShadowcoresPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-germany" />;
}
