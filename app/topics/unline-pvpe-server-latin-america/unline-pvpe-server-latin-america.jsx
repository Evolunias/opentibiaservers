import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-latin-america');
}

export default function UnlinePvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-latin-america" />;
}
