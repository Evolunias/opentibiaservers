import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-latin-america');
}

export default function AlasteraOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-latin-america" />;
}
