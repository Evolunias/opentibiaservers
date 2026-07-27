import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-review');
}

export default function DuraOnlineReviewKeywordPage() {
  return <StaticKeywordPage slug="dura-online-review" />;
}
