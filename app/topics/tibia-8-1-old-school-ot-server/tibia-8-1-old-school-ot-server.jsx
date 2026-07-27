import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-ot-server');
}

export default function Tibia81OldSchoolOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-ot-server" />;
}
