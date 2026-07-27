import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-uk');
}

export default function OldSchoolStatusUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-uk" />;
}
