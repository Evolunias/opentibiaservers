import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-mexico');
}

export default function ThorniaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-mexico" />;
}
