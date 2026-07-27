import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-tibia');
}

export default function FreshStartEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-tibia" />;
}
