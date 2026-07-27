import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-argentina');
}

export default function NilotOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-argentina" />;
}
