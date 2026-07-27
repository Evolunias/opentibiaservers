import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-real-map-server');
}

export default function Tibiascape14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-real-map-server" />;
}
