import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-argentina');
}

export default function EvoleraHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-argentina" />;
}
