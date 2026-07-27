import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-official');
}

export default function ActiveMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-official" />;
}
