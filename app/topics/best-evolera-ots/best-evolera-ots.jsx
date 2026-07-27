import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-ots');
}

export default function BestEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-ots" />;
}
