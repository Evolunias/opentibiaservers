import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-real-map-server');
}

export default function Tibiaorigins14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-real-map-server" />;
}
