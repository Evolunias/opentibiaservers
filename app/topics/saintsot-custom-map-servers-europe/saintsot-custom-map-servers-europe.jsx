import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-europe');
}

export default function SaintsotCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-europe" />;
}
