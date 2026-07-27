import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-latin-america');
}

export default function PvpeClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-latin-america" />;
}
