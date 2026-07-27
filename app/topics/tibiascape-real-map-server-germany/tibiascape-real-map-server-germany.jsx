import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-germany');
}

export default function TibiascapeRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-germany" />;
}
