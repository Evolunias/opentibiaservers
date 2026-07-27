import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-real-map-server');
}

export default function Tibiaorigins13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-real-map-server" />;
}
