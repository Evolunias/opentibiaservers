import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-review');
}

export default function NoxiousotReviewKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-review" />;
}
