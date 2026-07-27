import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-germany');
}

export default function TibiascapeCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-germany" />;
}
