import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-canada');
}

export default function VenoreotOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-canada" />;
}
