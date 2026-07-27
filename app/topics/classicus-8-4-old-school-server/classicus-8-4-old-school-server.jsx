import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-old-school-server');
}

export default function Classicus84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-old-school-server" />;
}
