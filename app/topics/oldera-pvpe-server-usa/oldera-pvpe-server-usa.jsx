import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-usa');
}

export default function OlderaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-usa" />;
}
