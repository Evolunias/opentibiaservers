import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-old-school-launch');
}

export default function Tibia96OldSchoolLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-old-school-launch" />;
}
