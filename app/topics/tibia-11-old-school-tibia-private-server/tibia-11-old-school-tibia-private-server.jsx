import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-tibia-private-server');
}

export default function Tibia11OldSchoolTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-tibia-private-server" />;
}
