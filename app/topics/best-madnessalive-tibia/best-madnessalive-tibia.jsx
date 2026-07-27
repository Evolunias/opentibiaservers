import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-tibia');
}

export default function BestMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-tibia" />;
}
