import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-launch');
}

export default function Tibia11OldSchoolLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-launch" />;
}
