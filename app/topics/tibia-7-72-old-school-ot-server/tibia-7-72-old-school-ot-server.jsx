import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-old-school-ot-server');
}

export default function Tibia772OldSchoolOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-old-school-ot-server" />;
}
