import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-latin-america');
}

export default function OldSchoolLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-latin-america" />;
}
