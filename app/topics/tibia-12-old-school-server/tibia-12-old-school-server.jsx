import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-server');
}

export default function Tibia12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-server" />;
}
