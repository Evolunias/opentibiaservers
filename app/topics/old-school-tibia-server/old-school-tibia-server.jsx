import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server');
}

export default function OldSchoolTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server" />;
}
