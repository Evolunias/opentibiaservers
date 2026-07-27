import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-mexico');
}

export default function SaintsotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-mexico" />;
}
