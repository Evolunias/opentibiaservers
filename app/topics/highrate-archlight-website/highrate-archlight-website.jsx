import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-website');
}

export default function HighrateArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-website" />;
}
