import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-brazil');
}

export default function MadnessaliveOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-brazil" />;
}
