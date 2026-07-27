import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-uk');
}

export default function ShadowcoresHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-uk" />;
}
