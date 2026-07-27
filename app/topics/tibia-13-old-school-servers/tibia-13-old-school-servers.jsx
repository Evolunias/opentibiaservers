import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-servers');
}

export default function Tibia13OldSchoolServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-servers" />;
}
