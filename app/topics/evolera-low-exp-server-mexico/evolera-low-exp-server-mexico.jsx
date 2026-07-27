import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-mexico');
}

export default function EvoleraLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-mexico" />;
}
