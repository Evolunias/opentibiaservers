import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-review');
}

export default function ArchlightReviewKeywordPage() {
  return <StaticKeywordPage slug="archlight-review" />;
}
