import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-98-old-school-server');
}

export default function Otmadness1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-98-old-school-server" />;
}
