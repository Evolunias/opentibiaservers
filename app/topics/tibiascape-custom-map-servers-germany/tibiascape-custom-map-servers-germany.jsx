import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-germany');
}

export default function TibiascapeCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-germany" />;
}
