import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-sweden');
}

export default function OldSchoolServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-sweden" />;
}
