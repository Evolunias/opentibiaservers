import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-europe');
}

export default function SaintsotOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-europe" />;
}
