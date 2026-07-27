import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-old-school-server');
}

export default function Otmadness12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-old-school-server" />;
}
