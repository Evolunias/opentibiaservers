import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-old-school-server');
}

export default function Otmadness86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-old-school-server" />;
}
