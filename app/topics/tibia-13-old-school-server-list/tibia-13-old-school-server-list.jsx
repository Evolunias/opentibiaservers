import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-server-list');
}

export default function Tibia13OldSchoolServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-server-list" />;
}
