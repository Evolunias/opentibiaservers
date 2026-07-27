import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-uk');
}

export default function SaintsotOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-uk" />;
}
