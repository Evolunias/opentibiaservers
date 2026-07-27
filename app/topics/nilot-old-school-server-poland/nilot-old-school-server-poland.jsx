import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-poland');
}

export default function NilotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-poland" />;
}
