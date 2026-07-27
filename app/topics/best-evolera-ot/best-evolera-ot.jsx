import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-ot');
}

export default function BestEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-ot" />;
}
