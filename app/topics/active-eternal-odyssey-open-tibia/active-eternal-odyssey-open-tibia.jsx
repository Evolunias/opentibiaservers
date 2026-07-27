import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-open-tibia');
}

export default function ActiveEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-open-tibia" />;
}
