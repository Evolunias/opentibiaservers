import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-real-map-server');
}

export default function Tibiaorigins15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-real-map-server" />;
}
