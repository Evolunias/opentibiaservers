import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-usa');
}

export default function OldSchoolClientUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-usa" />;
}
