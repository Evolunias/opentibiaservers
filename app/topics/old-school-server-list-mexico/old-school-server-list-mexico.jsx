import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-mexico');
}

export default function OldSchoolServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-mexico" />;
}
