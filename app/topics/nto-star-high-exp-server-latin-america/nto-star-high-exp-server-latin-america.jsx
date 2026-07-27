import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-latin-america');
}

export default function NtoStarHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-latin-america" />;
}
