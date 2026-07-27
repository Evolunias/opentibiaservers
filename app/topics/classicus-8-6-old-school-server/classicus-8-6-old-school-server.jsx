import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-old-school-server');
}

export default function Classicus86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-old-school-server" />;
}
