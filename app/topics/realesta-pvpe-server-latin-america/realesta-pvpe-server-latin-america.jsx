import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-latin-america');
}

export default function RealestaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-latin-america" />;
}
