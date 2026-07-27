import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-tibia');
}

export default function BestTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-tibia" />;
}
