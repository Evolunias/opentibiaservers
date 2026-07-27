import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-old-school-ot-server');
}

export default function Tibia96OldSchoolOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-old-school-ot-server" />;
}
