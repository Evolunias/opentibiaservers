import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-website');
}

export default function LowrateArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-website" />;
}
