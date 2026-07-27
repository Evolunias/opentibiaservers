import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-old-school-ot-server');
}

export default function Tibia80OldSchoolOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-old-school-ot-server" />;
}
