import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-latin-america');
}

export default function NonPvpGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-latin-america" />;
}
