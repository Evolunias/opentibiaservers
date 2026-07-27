import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-brazil');
}

export default function OldSchoolStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-brazil" />;
}
