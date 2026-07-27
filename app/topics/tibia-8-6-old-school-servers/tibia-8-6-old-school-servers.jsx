import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-old-school-servers');
}

export default function Tibia86OldSchoolServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-old-school-servers" />;
}
