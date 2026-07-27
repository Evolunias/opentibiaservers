import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-tibia-private-server');
}

export default function Tibia12OldSchoolTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-tibia-private-server" />;
}
