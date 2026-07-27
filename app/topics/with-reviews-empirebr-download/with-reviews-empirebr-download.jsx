import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-download');
}

export default function WithReviewsEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-download" />;
}
