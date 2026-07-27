import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-france');
}

export default function VenoreotOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-france" />;
}
