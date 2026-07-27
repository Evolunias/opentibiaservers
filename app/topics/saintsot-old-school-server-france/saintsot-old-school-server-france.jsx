import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-france');
}

export default function SaintsotOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-france" />;
}
