import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-germany');
}

export default function OlderaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-germany" />;
}
