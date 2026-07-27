import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-servers');
}

export default function Tibia854OldSchoolServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-servers" />;
}
