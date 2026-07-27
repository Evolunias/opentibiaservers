import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-open-tibia-server');
}

export default function Tibia12OldSchoolOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-open-tibia-server" />;
}
