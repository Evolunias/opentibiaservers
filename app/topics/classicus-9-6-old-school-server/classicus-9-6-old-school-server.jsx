import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-old-school-server');
}

export default function Classicus96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-old-school-server" />;
}
