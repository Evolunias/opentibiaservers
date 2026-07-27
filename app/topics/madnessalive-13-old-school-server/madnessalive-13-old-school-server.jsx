import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-old-school-server');
}

export default function Madnessalive13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-old-school-server" />;
}
