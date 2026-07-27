import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-54-old-school-server');
}

export default function Otmadness854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-54-old-school-server" />;
}
