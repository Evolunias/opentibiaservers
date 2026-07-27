import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-uk');
}

export default function MadnessaliveOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-uk" />;
}
