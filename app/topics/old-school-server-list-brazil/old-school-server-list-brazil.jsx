import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-brazil');
}

export default function OldSchoolServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-brazil" />;
}
