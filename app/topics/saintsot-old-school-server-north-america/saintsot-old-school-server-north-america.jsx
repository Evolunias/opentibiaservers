import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-north-america');
}

export default function SaintsotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-north-america" />;
}
