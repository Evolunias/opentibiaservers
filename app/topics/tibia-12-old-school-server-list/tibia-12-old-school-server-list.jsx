import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-server-list');
}

export default function Tibia12OldSchoolServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-server-list" />;
}
