import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-server');
}

export default function Tibia854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-server" />;
}
