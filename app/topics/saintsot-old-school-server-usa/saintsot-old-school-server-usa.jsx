import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-usa');
}

export default function SaintsotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-usa" />;
}
