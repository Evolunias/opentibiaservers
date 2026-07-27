import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-north-america');
}

export default function EvoleraHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-north-america" />;
}
