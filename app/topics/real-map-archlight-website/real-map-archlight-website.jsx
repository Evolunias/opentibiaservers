import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-website');
}

export default function RealMapArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-website" />;
}
