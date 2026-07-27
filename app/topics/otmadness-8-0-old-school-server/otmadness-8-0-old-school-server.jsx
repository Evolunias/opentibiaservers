import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-old-school-server');
}

export default function Otmadness80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-old-school-server" />;
}
