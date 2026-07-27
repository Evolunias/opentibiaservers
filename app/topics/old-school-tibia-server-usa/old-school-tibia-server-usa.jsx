import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-usa');
}

export default function OldSchoolTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-usa" />;
}
