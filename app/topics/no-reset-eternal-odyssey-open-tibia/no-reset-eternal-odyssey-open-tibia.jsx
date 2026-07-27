import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-open-tibia');
}

export default function NoResetEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-open-tibia" />;
}
