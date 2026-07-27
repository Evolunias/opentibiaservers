import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-latin-america');
}

export default function SaintsotOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-latin-america" />;
}
