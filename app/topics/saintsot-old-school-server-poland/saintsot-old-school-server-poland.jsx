import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-poland');
}

export default function SaintsotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-poland" />;
}
