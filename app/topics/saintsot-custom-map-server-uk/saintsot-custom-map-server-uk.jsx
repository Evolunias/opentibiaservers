import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-uk');
}

export default function SaintsotCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-uk" />;
}
