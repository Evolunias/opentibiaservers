import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-poland');
}

export default function VenoreotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-poland" />;
}
