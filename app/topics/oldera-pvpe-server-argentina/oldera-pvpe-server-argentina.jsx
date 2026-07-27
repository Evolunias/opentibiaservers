import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-argentina');
}

export default function OlderaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-argentina" />;
}
