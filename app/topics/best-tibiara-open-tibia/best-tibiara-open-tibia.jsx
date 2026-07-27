import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-open-tibia');
}

export default function BestTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-open-tibia" />;
}
