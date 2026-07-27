import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-mexico');
}

export default function ShadowcoresHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-mexico" />;
}
