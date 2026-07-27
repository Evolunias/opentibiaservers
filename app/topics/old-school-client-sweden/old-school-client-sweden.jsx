import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-sweden');
}

export default function OldSchoolClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-sweden" />;
}
