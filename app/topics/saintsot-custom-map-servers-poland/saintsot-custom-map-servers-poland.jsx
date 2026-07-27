import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-poland');
}

export default function SaintsotCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-poland" />;
}
