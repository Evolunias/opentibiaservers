import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-old-school-server');
}

export default function Classicus13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-old-school-server" />;
}
