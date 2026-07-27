import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-sweden');
}

export default function SaintsotCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-sweden" />;
}
