import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-launch');
}

export default function Tibia13OldSchoolLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-launch" />;
}
