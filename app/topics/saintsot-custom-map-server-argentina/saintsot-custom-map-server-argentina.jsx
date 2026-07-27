import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-argentina');
}

export default function SaintsotCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-argentina" />;
}
