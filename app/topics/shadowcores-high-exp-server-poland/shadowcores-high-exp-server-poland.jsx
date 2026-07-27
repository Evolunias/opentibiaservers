import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-poland');
}

export default function ShadowcoresHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-poland" />;
}
