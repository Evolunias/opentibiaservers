import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-usa');
}

export default function OldSchoolLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-usa" />;
}
