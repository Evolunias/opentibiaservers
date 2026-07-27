import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-old-school-open-tibia-server');
}

export default function Tibia84OldSchoolOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-old-school-open-tibia-server" />;
}
