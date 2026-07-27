import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-north-america');
}

export default function OldSchoolStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-north-america" />;
}
