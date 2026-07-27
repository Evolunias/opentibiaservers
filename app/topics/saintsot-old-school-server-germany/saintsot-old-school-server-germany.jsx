import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-germany');
}

export default function SaintsotOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-germany" />;
}
