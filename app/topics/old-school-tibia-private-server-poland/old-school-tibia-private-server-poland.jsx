import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-poland');
}

export default function OldSchoolTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-poland" />;
}
