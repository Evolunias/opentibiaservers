import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-tibia-private-server');
}

export default function Tibia81OldSchoolTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-tibia-private-server" />;
}
