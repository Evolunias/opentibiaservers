import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-old-school-servers');
}

export default function Tibia80OldSchoolServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-old-school-servers" />;
}
