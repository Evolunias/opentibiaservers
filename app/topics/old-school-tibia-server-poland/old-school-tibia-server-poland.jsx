import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-poland');
}

export default function OldSchoolTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-poland" />;
}
