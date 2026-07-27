import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-mexico');
}

export default function NilotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-mexico" />;
}
