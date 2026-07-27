import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-europe');
}

export default function CalmeraOtOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-europe" />;
}
