import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-server-list');
}

export default function Tibia81OldSchoolServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-server-list" />;
}
