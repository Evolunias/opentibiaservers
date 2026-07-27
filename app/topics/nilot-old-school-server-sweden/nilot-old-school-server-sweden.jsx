import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-sweden');
}

export default function NilotOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-sweden" />;
}
