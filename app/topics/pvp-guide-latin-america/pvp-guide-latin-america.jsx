import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-latin-america');
}

export default function PvpGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-latin-america" />;
}
