import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-canada');
}

export default function ShadowcoresLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-canada" />;
}
