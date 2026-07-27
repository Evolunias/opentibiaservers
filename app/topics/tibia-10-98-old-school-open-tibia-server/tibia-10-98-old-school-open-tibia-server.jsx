import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-old-school-open-tibia-server');
}

export default function Tibia1098OldSchoolOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-old-school-open-tibia-server" />;
}
