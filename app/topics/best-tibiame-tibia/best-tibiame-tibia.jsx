import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-tibia');
}

export default function BestTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-tibia" />;
}
