import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-open-tibia');
}

export default function BestEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-open-tibia" />;
}
