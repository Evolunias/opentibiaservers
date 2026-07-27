import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-real-map-server');
}

export default function Tibiaorigins11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-real-map-server" />;
}
