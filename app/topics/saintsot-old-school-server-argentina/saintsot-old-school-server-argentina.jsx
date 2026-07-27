import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-argentina');
}

export default function SaintsotOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-argentina" />;
}
