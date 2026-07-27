import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-open-tibia');
}

export default function CurrentMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-open-tibia" />;
}
