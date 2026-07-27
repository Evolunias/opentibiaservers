import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-tibia');
}

export default function PopularMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-tibia" />;
}
