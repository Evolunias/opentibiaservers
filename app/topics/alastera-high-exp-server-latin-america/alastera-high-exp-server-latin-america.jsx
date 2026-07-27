import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-latin-america');
}

export default function AlasteraHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-latin-america" />;
}
