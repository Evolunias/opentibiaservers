import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-ot');
}

export default function BestThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-ot" />;
}
