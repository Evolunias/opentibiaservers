import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-1-old-school-server');
}

export default function Madnessalive81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-1-old-school-server" />;
}
