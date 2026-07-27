import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-uk');
}

export default function NilotOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-uk" />;
}
