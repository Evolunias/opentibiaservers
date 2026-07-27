import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-germany');
}

export default function OriginaltibiaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-germany" />;
}
