import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-tibia');
}

export default function CurrentMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-tibia" />;
}
