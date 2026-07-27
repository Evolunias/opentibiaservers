import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-sweden');
}

export default function OldSchoolStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-sweden" />;
}
