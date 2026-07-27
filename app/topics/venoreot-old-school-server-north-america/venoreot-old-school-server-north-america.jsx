import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-north-america');
}

export default function VenoreotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-north-america" />;
}
