import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-usa');
}

export default function OldSchoolServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-usa" />;
}
