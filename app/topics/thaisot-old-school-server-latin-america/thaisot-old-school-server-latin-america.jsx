import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-latin-america');
}

export default function ThaisotOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-latin-america" />;
}
