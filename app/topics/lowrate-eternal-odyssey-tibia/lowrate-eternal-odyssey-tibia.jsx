import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-tibia');
}

export default function LowrateEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-tibia" />;
}
