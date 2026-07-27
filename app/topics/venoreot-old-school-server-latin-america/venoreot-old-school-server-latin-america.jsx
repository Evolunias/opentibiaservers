import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-latin-america');
}

export default function VenoreotOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-latin-america" />;
}
