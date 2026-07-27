import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-review');
}

export default function CoxaotReviewKeywordPage() {
  return <StaticKeywordPage slug="coxaot-review" />;
}
