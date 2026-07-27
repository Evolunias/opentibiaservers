import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-website');
}

export default function TopArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-website" />;
}
