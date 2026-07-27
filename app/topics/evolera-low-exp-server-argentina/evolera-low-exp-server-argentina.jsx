import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-argentina');
}

export default function EvoleraLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-argentina" />;
}
