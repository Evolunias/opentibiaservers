import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-tibia');
}

export default function NoResetEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-tibia" />;
}
