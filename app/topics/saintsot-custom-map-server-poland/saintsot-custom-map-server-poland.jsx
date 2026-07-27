import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-poland');
}

export default function SaintsotCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-poland" />;
}
