import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-latin-america');
}

export default function RealeraPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-latin-america" />;
}
