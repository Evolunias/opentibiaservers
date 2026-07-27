import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-argentina');
}

export default function OldSchoolServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-argentina" />;
}
