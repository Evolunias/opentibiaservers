import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-ot');
}

export default function PopularArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-ot" />;
}
