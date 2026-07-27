import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-latin-america');
}

export default function ThorniaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-latin-america" />;
}
