import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-uk');
}

export default function SaintsotCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-uk" />;
}
