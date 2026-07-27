import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-tibia');
}

export default function TopEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-tibia" />;
}
