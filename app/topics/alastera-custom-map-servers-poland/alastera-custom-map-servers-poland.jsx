import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-servers-poland');
}

export default function AlasteraCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-servers-poland" />;
}
