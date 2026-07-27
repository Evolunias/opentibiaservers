import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-website');
}

export default function FreshStartArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-website" />;
}
