import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-argentina');
}

export default function OldSchoolStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-argentina" />;
}
