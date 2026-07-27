import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-brazil');
}

export default function TibiascapeRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-brazil" />;
}
