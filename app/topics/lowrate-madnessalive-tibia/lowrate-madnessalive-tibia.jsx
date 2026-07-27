import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-tibia');
}

export default function LowrateMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-tibia" />;
}
