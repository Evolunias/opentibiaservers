import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-europe');
}

export default function SaintsotCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-europe" />;
}
