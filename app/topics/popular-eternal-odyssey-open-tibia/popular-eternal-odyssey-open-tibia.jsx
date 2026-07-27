import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-open-tibia');
}

export default function PopularEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-open-tibia" />;
}
