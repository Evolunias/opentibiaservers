import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-old-school-servers');
}

export default function Tibia74OldSchoolServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-old-school-servers" />;
}
