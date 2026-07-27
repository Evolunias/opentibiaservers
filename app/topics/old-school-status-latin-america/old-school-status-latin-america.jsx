import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-latin-america');
}

export default function OldSchoolStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-latin-america" />;
}
