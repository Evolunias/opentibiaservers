import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-open-tibia');
}

export default function BestTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-open-tibia" />;
}
