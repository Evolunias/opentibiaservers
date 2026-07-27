import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-website');
}

export default function ActiveArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-website" />;
}
