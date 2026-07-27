import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-europe');
}

export default function OldSchoolStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-europe" />;
}
