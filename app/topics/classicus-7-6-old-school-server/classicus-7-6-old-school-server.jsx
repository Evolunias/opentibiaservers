import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-old-school-server');
}

export default function Classicus76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-old-school-server" />;
}
