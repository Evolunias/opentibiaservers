import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-uk');
}

export default function ShadowcoresLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-uk" />;
}
