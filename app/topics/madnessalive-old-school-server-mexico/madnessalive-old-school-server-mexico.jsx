import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-mexico');
}

export default function MadnessaliveOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-mexico" />;
}
