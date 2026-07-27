import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-client');
}

export default function OldSchoolTibiaServerClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-client" />;
}
