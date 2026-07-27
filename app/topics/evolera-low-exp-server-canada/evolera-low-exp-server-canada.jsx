import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-canada');
}

export default function EvoleraLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-canada" />;
}
