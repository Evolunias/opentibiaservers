import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-latin-america');
}

export default function NtoStarLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-latin-america" />;
}
