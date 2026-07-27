import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-open-tibia');
}

export default function PopularMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-open-tibia" />;
}
