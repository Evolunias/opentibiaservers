import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-old-school-server');
}

export default function Tibia772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-old-school-server" />;
}
