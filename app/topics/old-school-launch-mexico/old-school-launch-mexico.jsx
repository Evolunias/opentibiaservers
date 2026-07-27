import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-mexico');
}

export default function OldSchoolLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-mexico" />;
}
