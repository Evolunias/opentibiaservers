import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-brazil');
}

export default function SaintsotOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-brazil" />;
}
