import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-argentina');
}

export default function ShadowcoresHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-argentina" />;
}
