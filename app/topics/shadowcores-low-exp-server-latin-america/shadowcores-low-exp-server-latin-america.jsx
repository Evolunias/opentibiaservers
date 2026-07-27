import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-latin-america');
}

export default function ShadowcoresLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-latin-america" />;
}
