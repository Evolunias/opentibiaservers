import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-open-tibia-server');
}

export default function Tibia13OldSchoolOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-open-tibia-server" />;
}
