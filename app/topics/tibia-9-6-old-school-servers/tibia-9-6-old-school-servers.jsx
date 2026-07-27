import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-old-school-servers');
}

export default function Tibia96OldSchoolServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-old-school-servers" />;
}
