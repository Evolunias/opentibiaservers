import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-germany');
}

export default function BlazeraPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-germany" />;
}
