import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-poland');
}

export default function OldSchoolOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-poland" />;
}
