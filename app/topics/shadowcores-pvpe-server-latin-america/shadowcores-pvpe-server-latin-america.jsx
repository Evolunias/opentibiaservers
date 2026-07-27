import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-latin-america');
}

export default function ShadowcoresPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-latin-america" />;
}
