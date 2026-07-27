import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-germany');
}

export default function OldSchoolServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-germany" />;
}
