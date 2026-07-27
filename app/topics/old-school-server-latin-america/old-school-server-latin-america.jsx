import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-latin-america');
}

export default function OldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-latin-america" />;
}
