import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-latin-america');
}

export default function MiraclePvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-latin-america" />;
}
