import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-poland');
}

export default function OldSchoolStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-poland" />;
}
