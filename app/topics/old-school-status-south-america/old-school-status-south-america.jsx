import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-south-america');
}

export default function OldSchoolStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-south-america" />;
}
