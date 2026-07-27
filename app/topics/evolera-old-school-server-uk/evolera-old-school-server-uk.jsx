import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-uk');
}

export default function EvoleraOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-uk" />;
}
