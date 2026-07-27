import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-website');
}

export default function RealMapZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-website" />;
}
