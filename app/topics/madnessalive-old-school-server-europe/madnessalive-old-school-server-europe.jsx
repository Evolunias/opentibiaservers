import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-europe');
}

export default function MadnessaliveOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-europe" />;
}
