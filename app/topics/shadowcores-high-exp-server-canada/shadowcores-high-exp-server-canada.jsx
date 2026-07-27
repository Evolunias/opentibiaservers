import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-canada');
}

export default function ShadowcoresHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-canada" />;
}
