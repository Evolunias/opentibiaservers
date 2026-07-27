import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-argentina');
}

export default function OldSchoolClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-argentina" />;
}
