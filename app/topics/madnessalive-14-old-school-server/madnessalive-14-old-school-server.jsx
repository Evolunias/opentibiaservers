import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-old-school-server');
}

export default function Madnessalive14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-old-school-server" />;
}
