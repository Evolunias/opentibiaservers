import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-launch');
}

export default function Tibia15OldSchoolLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-launch" />;
}
