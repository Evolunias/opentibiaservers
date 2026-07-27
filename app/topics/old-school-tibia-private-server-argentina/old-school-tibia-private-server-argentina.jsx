import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-argentina');
}

export default function OldSchoolTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-argentina" />;
}
