import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-france');
}

export default function EvoleraLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-france" />;
}
