import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-usa');
}

export default function NilotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-usa" />;
}
