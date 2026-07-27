import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-latin-america');
}

export default function ShadowcoresHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-latin-america" />;
}
