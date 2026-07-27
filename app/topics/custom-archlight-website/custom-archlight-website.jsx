import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-website');
}

export default function CustomArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-website" />;
}
