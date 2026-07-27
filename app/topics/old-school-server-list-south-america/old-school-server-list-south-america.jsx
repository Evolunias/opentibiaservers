import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-south-america');
}

export default function OldSchoolServerListSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-south-america" />;
}
