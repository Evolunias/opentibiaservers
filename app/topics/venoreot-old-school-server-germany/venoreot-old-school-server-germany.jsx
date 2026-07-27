import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-old-school-server-germany');
}

export default function VenoreotOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-old-school-server-germany" />;
}
