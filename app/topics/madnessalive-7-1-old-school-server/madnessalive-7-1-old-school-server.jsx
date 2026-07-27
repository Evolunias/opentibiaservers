import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-1-old-school-server');
}

export default function Madnessalive71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-1-old-school-server" />;
}
