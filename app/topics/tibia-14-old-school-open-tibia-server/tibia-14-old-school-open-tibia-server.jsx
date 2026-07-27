import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-open-tibia-server');
}

export default function Tibia14OldSchoolOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-open-tibia-server" />;
}
