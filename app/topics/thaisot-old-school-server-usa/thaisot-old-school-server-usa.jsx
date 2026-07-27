import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-usa');
}

export default function ThaisotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-usa" />;
}
