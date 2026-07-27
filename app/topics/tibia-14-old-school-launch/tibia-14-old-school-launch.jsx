import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-launch');
}

export default function Tibia14OldSchoolLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-launch" />;
}
