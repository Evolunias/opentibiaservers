import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-usa');
}

export default function OldSchoolStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-usa" />;
}
