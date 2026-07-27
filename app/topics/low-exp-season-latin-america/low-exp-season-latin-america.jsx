import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-latin-america');
}

export default function LowExpSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-latin-america" />;
}
