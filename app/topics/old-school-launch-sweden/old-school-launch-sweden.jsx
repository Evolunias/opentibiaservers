import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-sweden');
}

export default function OldSchoolLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-sweden" />;
}
