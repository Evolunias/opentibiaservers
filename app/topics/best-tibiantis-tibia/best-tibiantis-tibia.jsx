import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-tibia');
}

export default function BestTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-tibia" />;
}
