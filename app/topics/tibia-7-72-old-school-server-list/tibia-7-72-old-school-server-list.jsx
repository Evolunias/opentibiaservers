import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-old-school-server-list');
}

export default function Tibia772OldSchoolServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-old-school-server-list" />;
}
