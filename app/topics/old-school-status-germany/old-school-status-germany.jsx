import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-germany');
}

export default function OldSchoolStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-germany" />;
}
