import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-mexico');
}

export default function OldSchoolStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-mexico" />;
}
