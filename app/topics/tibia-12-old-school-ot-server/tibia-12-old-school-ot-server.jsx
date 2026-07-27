import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-ot-server');
}

export default function Tibia12OldSchoolOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-ot-server" />;
}
