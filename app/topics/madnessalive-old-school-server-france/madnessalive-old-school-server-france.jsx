import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-france');
}

export default function MadnessaliveOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-france" />;
}
