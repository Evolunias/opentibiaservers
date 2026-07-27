import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-old-school-server');
}

export default function Classicus81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-old-school-server" />;
}
