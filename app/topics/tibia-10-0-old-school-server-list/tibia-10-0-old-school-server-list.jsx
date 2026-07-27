import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-old-school-server-list');
}

export default function Tibia100OldSchoolServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-old-school-server-list" />;
}
