import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-old-school-server');
}

export default function Otmadness11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-old-school-server" />;
}
