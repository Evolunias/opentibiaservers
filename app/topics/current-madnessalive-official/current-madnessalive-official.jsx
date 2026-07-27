import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-official');
}

export default function CurrentMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-official" />;
}
