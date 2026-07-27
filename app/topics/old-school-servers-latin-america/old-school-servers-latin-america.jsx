import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-latin-america');
}

export default function OldSchoolServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-latin-america" />;
}
