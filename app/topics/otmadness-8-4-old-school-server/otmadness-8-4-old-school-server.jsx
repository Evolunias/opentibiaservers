import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-old-school-server');
}

export default function Otmadness84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-old-school-server" />;
}
