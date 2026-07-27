import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-old-school-server');
}

export default function Classicus772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-old-school-server" />;
}
