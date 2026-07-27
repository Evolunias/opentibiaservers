import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-server');
}

export default function Tibia14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-server" />;
}
