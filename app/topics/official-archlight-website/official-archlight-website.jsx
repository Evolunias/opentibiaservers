import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-website');
}

export default function OfficialArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-website" />;
}
