import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-latin-america');
}

export default function OldSchoolServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-latin-america" />;
}
