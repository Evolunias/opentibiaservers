import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-canada');
}

export default function OldSchoolStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-canada" />;
}
