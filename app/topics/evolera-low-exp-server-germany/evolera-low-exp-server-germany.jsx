import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-germany');
}

export default function EvoleraLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-germany" />;
}
