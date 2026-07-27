import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-poland');
}

export default function TibiascapeRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-poland" />;
}
