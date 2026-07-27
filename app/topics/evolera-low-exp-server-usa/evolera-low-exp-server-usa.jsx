import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-usa');
}

export default function EvoleraLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-usa" />;
}
