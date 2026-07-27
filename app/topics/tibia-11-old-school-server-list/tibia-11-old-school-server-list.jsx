import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-server-list');
}

export default function Tibia11OldSchoolServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-server-list" />;
}
