import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-sweden');
}

export default function MadnessaliveOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-sweden" />;
}
