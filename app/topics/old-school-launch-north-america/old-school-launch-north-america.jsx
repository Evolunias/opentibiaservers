import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-north-america');
}

export default function OldSchoolLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-north-america" />;
}
