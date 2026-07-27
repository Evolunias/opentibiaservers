import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-europe');
}

export default function OldSchoolLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-europe" />;
}
