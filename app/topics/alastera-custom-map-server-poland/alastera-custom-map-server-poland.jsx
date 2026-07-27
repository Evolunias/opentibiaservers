import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-poland');
}

export default function AlasteraCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-poland" />;
}
