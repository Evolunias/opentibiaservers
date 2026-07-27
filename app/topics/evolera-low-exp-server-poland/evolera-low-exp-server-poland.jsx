import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-poland');
}

export default function EvoleraLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-poland" />;
}
