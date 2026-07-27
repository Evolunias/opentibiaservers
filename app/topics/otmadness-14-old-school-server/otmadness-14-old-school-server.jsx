import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-old-school-server');
}

export default function Otmadness14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-old-school-server" />;
}
