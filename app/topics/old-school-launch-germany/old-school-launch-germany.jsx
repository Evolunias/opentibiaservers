import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-germany');
}

export default function OldSchoolLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-germany" />;
}
