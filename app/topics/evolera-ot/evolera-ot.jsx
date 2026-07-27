import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-ot');
}

export default function EvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="evolera-ot" />;
}
