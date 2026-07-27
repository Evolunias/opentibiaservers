import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-poland');
}

export default function OldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-poland" />;
}
