import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-south-america');
}

export default function OldSchoolLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-south-america" />;
}
