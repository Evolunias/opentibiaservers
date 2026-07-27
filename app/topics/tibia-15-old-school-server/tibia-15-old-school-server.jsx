import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-server');
}

export default function Tibia15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-server" />;
}
