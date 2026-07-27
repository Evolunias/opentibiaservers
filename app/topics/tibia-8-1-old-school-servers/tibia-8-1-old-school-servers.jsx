import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-servers');
}

export default function Tibia81OldSchoolServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-servers" />;
}
