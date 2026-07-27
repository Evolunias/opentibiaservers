import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-official');
}

export default function CustomMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-official" />;
}
