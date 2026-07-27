import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-open-tibia');
}

export default function CurrentEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-open-tibia" />;
}
