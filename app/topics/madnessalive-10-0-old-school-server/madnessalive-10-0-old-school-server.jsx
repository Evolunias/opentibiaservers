import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-10-0-old-school-server');
}

export default function Madnessalive100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-10-0-old-school-server" />;
}
