import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-uk');
}

export default function OldSchoolTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-uk" />;
}
