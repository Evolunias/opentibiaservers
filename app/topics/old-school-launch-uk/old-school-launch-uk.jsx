import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-uk');
}

export default function OldSchoolLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-uk" />;
}
