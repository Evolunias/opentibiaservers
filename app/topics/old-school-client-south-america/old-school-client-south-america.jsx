import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-south-america');
}

export default function OldSchoolClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-south-america" />;
}
