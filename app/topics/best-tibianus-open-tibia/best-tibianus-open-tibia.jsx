import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-open-tibia');
}

export default function BestTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-open-tibia" />;
}
