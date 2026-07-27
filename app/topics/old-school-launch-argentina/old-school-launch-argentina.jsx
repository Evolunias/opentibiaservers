import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-argentina');
}

export default function OldSchoolLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-argentina" />;
}
