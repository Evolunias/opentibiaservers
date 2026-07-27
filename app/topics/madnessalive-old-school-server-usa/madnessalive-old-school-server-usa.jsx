import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-usa');
}

export default function MadnessaliveOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-usa" />;
}
