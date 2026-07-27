import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-north-america');
}

export default function EvoleraLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-north-america" />;
}
