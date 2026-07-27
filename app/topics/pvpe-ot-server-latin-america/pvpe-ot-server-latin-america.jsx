import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-latin-america');
}

export default function PvpeOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-latin-america" />;
}
