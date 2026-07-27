import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-server-list');
}

export default function Tibia14OldSchoolServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-server-list" />;
}
