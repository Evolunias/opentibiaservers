import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-open-tibia-server');
}

export default function Tibia11OldSchoolOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-open-tibia-server" />;
}
