import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-tibia');
}

export default function BestEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-tibia" />;
}
