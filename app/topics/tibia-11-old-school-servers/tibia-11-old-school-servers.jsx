import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-servers');
}

export default function Tibia11OldSchoolServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-servers" />;
}
