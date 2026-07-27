import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-germany');
}

export default function TibiascapeRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-germany" />;
}
