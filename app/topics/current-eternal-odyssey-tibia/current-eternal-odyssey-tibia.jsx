import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-tibia');
}

export default function CurrentEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-tibia" />;
}
