import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-latin-america');
}

export default function MidhemPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-latin-america" />;
}
