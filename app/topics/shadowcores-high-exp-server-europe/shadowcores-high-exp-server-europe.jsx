import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-europe');
}

export default function ShadowcoresHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-europe" />;
}
