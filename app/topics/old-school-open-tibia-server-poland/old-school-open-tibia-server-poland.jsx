import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-poland');
}

export default function OldSchoolOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-poland" />;
}
