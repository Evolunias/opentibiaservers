import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-official');
}

export default function HighrateMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-official" />;
}
