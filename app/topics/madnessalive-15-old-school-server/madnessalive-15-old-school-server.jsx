import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-old-school-server');
}

export default function Madnessalive15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-old-school-server" />;
}
