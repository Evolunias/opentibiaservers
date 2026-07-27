import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-ot');
}

export default function BestArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-ot" />;
}
