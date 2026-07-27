import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-9-6-old-school-server');
}

export default function Madnessalive96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-9-6-old-school-server" />;
}
