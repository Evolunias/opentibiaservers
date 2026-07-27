import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-old-school-ot-server');
}

export default function Tibia1098OldSchoolOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-old-school-ot-server" />;
}
