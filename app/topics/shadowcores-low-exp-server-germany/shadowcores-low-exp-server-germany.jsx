import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-germany');
}

export default function ShadowcoresLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-germany" />;
}
