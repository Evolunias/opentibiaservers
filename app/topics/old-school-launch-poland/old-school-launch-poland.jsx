import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-poland');
}

export default function OldSchoolLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-poland" />;
}
