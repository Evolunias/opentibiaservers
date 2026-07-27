import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-open-tibia');
}

export default function LowrateEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-open-tibia" />;
}
