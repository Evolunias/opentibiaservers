import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-old-school-server');
}

export default function Otmadness74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-old-school-server" />;
}
