import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-old-school-server-list');
}

export default function Tibia86OldSchoolServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-old-school-server-list" />;
}
