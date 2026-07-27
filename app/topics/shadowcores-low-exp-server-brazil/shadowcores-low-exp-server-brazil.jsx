import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-brazil');
}

export default function ShadowcoresLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-brazil" />;
}
