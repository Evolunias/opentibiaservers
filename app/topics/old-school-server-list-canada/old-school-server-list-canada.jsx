import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-canada');
}

export default function OldSchoolServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-canada" />;
}
