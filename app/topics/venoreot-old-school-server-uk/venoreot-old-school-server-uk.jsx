import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-uk');
}

export default function VenoreotOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-uk" />;
}
