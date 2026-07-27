import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-usa');
}

export default function ThorniaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-usa" />;
}
