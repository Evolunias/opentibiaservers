import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-4-old-school-server');
}

export default function Madnessalive74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-4-old-school-server" />;
}
