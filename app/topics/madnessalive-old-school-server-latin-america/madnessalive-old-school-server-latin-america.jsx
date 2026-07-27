import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-latin-america');
}

export default function MadnessaliveOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-latin-america" />;
}
