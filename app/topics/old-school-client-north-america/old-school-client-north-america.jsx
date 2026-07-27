import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-north-america');
}

export default function OldSchoolClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-north-america" />;
}
