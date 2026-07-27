import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-usa');
}

export default function VenoreotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-usa" />;
}
