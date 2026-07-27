import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-old-school-server');
}

export default function Otmadness96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-old-school-server" />;
}
