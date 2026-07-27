import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-open-tibia-server');
}

export default function Tibia15OldSchoolOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-open-tibia-server" />;
}
