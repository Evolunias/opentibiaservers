import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-uk');
}

export default function OldSchoolOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-uk" />;
}
