import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-south-america');
}

export default function OldSchoolGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-south-america" />;
}
