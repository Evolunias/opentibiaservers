import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-open-tibia');
}

export default function BestTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-open-tibia" />;
}
