import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-poland');
}

export default function OldSchoolServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-poland" />;
}
