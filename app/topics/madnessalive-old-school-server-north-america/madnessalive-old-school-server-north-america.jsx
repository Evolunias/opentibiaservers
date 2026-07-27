import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-north-america');
}

export default function MadnessaliveOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-north-america" />;
}
