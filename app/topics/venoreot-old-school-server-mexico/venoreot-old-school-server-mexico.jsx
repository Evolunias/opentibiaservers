import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-mexico');
}

export default function VenoreotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-mexico" />;
}
