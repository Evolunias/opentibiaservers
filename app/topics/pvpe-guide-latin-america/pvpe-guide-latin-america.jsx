import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-latin-america');
}

export default function PvpeGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-latin-america" />;
}
