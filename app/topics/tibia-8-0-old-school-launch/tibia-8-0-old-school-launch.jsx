import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-old-school-launch');
}

export default function Tibia80OldSchoolLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-old-school-launch" />;
}
