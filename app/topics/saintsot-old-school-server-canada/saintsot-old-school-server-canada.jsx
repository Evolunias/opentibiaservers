import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-canada');
}

export default function SaintsotOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-canada" />;
}
