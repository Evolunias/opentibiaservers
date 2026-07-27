import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-poland');
}

export default function MadnessaliveOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-poland" />;
}
