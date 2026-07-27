import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-tibia');
}

export default function PopularEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-tibia" />;
}
