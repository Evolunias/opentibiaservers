import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-canada');
}

export default function OldSchoolLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-canada" />;
}
