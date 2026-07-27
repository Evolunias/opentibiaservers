import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-latin-america');
}

export default function AlasteraLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-latin-america" />;
}
