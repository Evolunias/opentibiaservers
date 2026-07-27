import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-canada');
}

export default function MadnessaliveOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-canada" />;
}
