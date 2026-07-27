import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-client');
}

export default function OldSchoolMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-client" />;
}
