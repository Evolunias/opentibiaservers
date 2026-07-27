import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-ot');
}

export default function BestUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="best-unline-ot" />;
}
