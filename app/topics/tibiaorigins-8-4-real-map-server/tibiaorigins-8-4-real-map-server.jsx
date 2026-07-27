import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-real-map-server');
}

export default function Tibiaorigins84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-real-map-server" />;
}
