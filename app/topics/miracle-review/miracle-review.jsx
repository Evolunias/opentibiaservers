import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-review');
}

export default function MiracleReviewKeywordPage() {
  return <StaticKeywordPage slug="miracle-review" />;
}
