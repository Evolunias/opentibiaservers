import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-north-america');
}

export default function OldSchoolServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-north-america" />;
}
