import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-mexico');
}

export default function ThaisotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-mexico" />;
}
