import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-open-tibia-server');
}

export default function Tibia81OldSchoolOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-open-tibia-server" />;
}
