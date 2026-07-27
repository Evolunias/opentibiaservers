import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-servers');
}

export default function Tibia12OldSchoolServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-servers" />;
}
