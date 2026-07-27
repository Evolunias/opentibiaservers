import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-open-tibia');
}

export default function HighrateMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-open-tibia" />;
}
