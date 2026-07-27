import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-latin-america');
}

export default function OldSchoolClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-latin-america" />;
}
