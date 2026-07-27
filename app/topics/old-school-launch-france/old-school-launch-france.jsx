import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-launch-france');
}

export default function OldSchoolLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-launch-france" />;
}
