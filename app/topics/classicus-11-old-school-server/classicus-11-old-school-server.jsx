import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-old-school-server');
}

export default function Classicus11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-old-school-server" />;
}
