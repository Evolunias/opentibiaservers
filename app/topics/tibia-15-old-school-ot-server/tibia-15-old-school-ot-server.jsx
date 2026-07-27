import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-ot-server');
}

export default function Tibia15OldSchoolOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-ot-server" />;
}
