import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-poland');
}

export default function ShadowcoresLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-poland" />;
}
