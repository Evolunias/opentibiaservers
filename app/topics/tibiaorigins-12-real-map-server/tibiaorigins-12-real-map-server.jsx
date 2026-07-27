import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-real-map-server');
}

export default function Tibiaorigins12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-real-map-server" />;
}
