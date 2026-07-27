import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-launch');
}

export default function OldSchoolTibiaServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-launch" />;
}
