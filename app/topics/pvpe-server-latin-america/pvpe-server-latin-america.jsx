import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-latin-america');
}

export default function PvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-latin-america" />;
}
