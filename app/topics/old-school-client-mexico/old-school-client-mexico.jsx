import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-mexico');
}

export default function OldSchoolClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-mexico" />;
}
