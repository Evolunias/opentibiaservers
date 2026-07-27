import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-brazil');
}

export default function OldSchoolLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-brazil" />;
}
