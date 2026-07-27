import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-old-school-server');
}

export default function Madnessalive12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-old-school-server" />;
}
