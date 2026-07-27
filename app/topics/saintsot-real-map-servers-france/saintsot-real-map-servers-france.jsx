import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-france');
}

export default function SaintsotRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-france" />;
}
