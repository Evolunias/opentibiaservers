import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-brazil');
}

export default function ShadowcoresHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-brazil" />;
}
