import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-south-america');
}

export default function SaintsotOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-south-america" />;
}
