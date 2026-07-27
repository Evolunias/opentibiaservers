import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-website');
}

export default function PopularArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-website" />;
}
