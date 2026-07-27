import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-launch');
}

export default function Tibia12OldSchoolLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-launch" />;
}
