import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-poland');
}

export default function OldSchoolServersPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-poland" />;
}
