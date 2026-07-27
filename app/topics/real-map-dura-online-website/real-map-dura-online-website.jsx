import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-website');
}

export default function RealMapDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-website" />;
}
