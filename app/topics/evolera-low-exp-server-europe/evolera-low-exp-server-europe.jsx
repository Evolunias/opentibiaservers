import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-europe');
}

export default function EvoleraLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-europe" />;
}
