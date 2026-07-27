import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-old-school-server');
}

export default function Otmadness13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-old-school-server" />;
}
