import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-argentina');
}

export default function ShadowcoresLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-argentina" />;
}
