import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-ot-server');
}

export default function Tibia11OldSchoolOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-ot-server" />;
}
