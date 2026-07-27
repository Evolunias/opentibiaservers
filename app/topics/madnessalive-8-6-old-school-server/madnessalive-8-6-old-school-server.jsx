import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-6-old-school-server');
}

export default function Madnessalive86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-6-old-school-server" />;
}
