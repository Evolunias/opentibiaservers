import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-brazil');
}

export default function VenoreotOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-brazil" />;
}
