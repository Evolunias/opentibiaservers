import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-server');
}

export default function Tibia13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-server" />;
}
