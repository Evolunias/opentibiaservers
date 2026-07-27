import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-0-real-map-server');
}

export default function Tibiaorigins80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-0-real-map-server" />;
}
