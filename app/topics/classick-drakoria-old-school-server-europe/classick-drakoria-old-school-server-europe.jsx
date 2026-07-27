import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-europe');
}

export default function ClassickDrakoriaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-europe" />;
}
