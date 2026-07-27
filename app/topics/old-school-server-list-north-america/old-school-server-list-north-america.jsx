import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-north-america');
}

export default function OldSchoolServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-north-america" />;
}
