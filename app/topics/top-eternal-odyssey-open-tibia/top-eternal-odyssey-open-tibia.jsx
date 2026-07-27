import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-open-tibia');
}

export default function TopEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-open-tibia" />;
}
