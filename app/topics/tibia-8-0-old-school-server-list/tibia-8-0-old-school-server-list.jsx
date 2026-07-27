import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-old-school-server-list');
}

export default function Tibia80OldSchoolServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-old-school-server-list" />;
}
