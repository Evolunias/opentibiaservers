import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-poland');
}

export default function TibiascapeCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-poland" />;
}
