import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-brazil');
}

export default function NilotOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-brazil" />;
}
