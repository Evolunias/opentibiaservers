import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-tibia');
}

export default function HighrateMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-tibia" />;
}
