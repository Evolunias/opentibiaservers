import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-open-tibia');
}

export default function LowrateMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-open-tibia" />;
}
