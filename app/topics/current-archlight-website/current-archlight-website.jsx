import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-website');
}

export default function CurrentArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-website" />;
}
