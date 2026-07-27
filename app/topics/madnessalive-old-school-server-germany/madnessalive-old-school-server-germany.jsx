import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-germany');
}

export default function MadnessaliveOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-germany" />;
}
