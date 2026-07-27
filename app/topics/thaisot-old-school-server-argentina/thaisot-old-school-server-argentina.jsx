import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-argentina');
}

export default function ThaisotOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-argentina" />;
}
