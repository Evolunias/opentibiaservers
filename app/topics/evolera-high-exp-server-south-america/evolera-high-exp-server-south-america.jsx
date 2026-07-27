import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-south-america');
}

export default function EvoleraHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-south-america" />;
}
