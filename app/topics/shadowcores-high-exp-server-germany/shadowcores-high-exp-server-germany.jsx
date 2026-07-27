import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-germany');
}

export default function ShadowcoresHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-germany" />;
}
