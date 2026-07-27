import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-website');
}

export default function NewArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-website" />;
}
