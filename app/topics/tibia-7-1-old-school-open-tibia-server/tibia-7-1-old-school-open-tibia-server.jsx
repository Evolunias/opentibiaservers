import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-old-school-open-tibia-server');
}

export default function Tibia71OldSchoolOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-old-school-open-tibia-server" />;
}
