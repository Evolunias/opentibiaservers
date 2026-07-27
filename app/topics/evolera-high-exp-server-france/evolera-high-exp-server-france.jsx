import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-france');
}

export default function EvoleraHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-france" />;
}
