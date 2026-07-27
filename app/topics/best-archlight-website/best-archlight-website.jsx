import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-website');
}

export default function BestArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-website" />;
}
