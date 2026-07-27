import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-open-tibia');
}

export default function FreshStartEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-open-tibia" />;
}
