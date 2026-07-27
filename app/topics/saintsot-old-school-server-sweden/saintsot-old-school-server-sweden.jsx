import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-sweden');
}

export default function SaintsotOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-sweden" />;
}
