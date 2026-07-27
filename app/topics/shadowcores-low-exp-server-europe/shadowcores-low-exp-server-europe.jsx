import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-europe');
}

export default function ShadowcoresLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-europe" />;
}
