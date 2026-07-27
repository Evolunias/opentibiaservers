import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-latin-america');
}

export default function ThaisotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-latin-america" />;
}
