import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-old-school-server');
}

export default function Otmadness100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-old-school-server" />;
}
