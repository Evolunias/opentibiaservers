import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-old-school-launch');
}

export default function Tibia76OldSchoolLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-old-school-launch" />;
}
